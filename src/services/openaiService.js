import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

/**
 * Analizza un'idea di business utilizzando GPT-4o-mini.
 * Restituisce un oggetto JSON strutturato per la Dashboard.
 */
export const analyzeIdea = async (ideaText) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Sei un esperto analista di business e startup. 
          Il tuo compito è analizzare l'idea dell'utente e fornire un report dettagliato in formato JSON.
          
          La risposta DEVE essere un oggetto JSON con questa esatta struttura:
          {
            "ideaDescription": "Sintesi professionale dell'idea in una frase",
            "successScore": {
              "score": 85, // Un numero tra 0 e 100
              "description": "Breve spiegazione del punteggio"
            },
            "difficultyAnalysis": [
              {
                "title": "Titolo dell'analisi (es. Analisi di Mercato)",
                "description": "Descrizione dettagliata delle sfide o opportunità"
              },
              {
                "title": "Titolo (es. Barriere all'Entrata)",
                "description": "Descrizione"
              }
            ],
            "verdict": {
              "text": "GO", // "GO",  o "NO GO"
              "color": "cyan" // "cyan" per GO,  "red" per NO GO
            },
            "personas": [
              {
                "name": "Nome fittizio",
                "role": "Ruolo lavorativo",
                "quote": "Cosa direbbe questo utente sull'idea",
                "icon": "icon_name" // Scegli tra: person, restaurant, inventory_2, shopping_cart, work, school
              }
            ],
            "competitors": [
              {
                "name": "Nome Competitor",
                "coreBusiness": "Cosa fanno principalmente",
                "weakPoint": "Punto debole rispetto all'idea dell'utente"
              }
            ]
          }
          
          Rispondi esclusivamente in lingua italiana.
          Fornisci sempre esattamente 2 difficultyAnalysis, 3 personas, e 3 competitors.`
        },
        {
          role: "user",
          content: `Analizza questa idea di business: ${ideaText}`
        }
      ],
      response_format: { type: "json_object" },
    });

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error("Errore durante l'analisi dell'idea:", error);
    throw error;
  }
};
