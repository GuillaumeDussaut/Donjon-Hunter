export const fetchButtonData = async () => {
    try {
      const response = await fetch('/datas.json'); 
      if (!response.ok) {
        throw new Error('Erreur de chargement des données.');
      }
      const data = await response.json();
      return data.boutons;
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      return [];
    }
  };
export const fetchUserData = async () => {
    try {
      const response = await fetch('/datas.json'); 
      if (!response.ok) {
        throw new Error('Erreur de chargement des données.');
      }
      const data = await response.json();
      return data.admin;
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      return [];
    }
  };
  

  