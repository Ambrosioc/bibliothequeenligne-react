import { useEffect, useState } from "react";

export function useFetchwithToken(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // Déclarer cleanUrl avant le try pour qu'il soit accessible dans le catch
      let cleanUrl = url.endsWith('/') && url !== '/' ? url.slice(0, -1) : url;
      
      // Si l'URL commence par http://, la remplacer par https:// pour éviter les redirections
      if (cleanUrl.startsWith('http://')) {
        cleanUrl = cleanUrl.replace('http://', 'https://');
        console.log('Switched to HTTPS:', cleanUrl);
      }

      try {
        const token = sessionStorage.getItem("token");
        
        let response;
        try {
          response = await fetch(cleanUrl, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            redirect: 'follow', // Suivre automatiquement les redirections
          });
        } catch (fetchError) {
          // Si erreur réseau (potentiellement certificat SSL auto-signé)
          if (fetchError.message.includes('Failed to fetch') || fetchError.message.includes('net::ERR')) {
            // Essayer avec http:// si https:// échoue (pour développement local)
            const httpUrl = cleanUrl.replace('https://', 'http://');
            console.log('HTTPS failed, trying HTTP:', httpUrl);
            try {
              response = await fetch(httpUrl, {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                redirect: 'follow',
              });
            } catch (httpError) {
              throw fetchError; // Lancer l'erreur originale
            }
          } else {
            throw fetchError;
          }
        }

        // Gérer les redirections
        if (response.redirected) {
          console.log('Redirected from', url, 'to:', response.url);
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Gérer le cas où la réponse peut être une chaîne JSON (cache Symfony)
        const text = await response.text();
        let jsonData;
        try {
          jsonData = JSON.parse(text);
        } catch (e) {
          // Si c'est déjà du JSON parsé
          jsonData = text;
        }

        setData(jsonData);
        setError(false);
      } catch (error) {
        console.error("❌ Erreur lors du chargement des données (avec token):", error);
        console.error("URL tentée:", cleanUrl || url);
        console.error("Message d'erreur:", error.message);
        console.error("Stack trace:", error.stack);
        setError(error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // Déclarer cleanUrl avant le try pour qu'il soit accessible dans le catch
      let cleanUrl = url.endsWith('/') && url !== '/' ? url.slice(0, -1) : url;
      
      // Si l'URL commence par http://, la remplacer par https:// pour éviter les redirections
      if (cleanUrl.startsWith('http://')) {
        cleanUrl = cleanUrl.replace('http://', 'https://');
        console.log('Switched to HTTPS:', cleanUrl);
      }

      try {
        let response;
        try {
          response = await fetch(cleanUrl, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            redirect: 'follow', // Suivre automatiquement les redirections
          });
        } catch (fetchError) {
          // Si erreur réseau (potentiellement certificat SSL auto-signé)
          if (fetchError.message.includes('Failed to fetch') || fetchError.message.includes('net::ERR')) {
            // Essayer avec http:// si https:// échoue (pour développement local)
            const httpUrl = cleanUrl.replace('https://', 'http://');
            console.log('HTTPS failed, trying HTTP:', httpUrl);
            try {
              response = await fetch(httpUrl, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                redirect: 'follow',
              });
            } catch (httpError) {
              throw fetchError; // Lancer l'erreur originale
            }
          } else {
            throw fetchError;
          }
        }

        // Gérer les redirections
        if (response.redirected) {
          console.log('Redirected from', url, 'to:', response.url);
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Gérer le cas où la réponse peut être une chaîne JSON (cache Symfony)
        const text = await response.text();
        let jsonData;
        try {
          jsonData = JSON.parse(text);
        } catch (e) {
          // Si c'est déjà du JSON parsé
          jsonData = text;
        }

        setData(jsonData);
        setError(false);
      } catch (error) {
        console.error("❌ Erreur lors du chargement des données (sans token):", error);
        console.error("URL tentée:", cleanUrl || url);
        console.error("Message d'erreur:", error.message);
        console.error("Stack trace:", error.stack);
        setError(error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
