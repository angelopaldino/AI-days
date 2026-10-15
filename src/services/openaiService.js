import OpenAI from 'openai';

/**
 * Inizializzazione del client OpenAI con supporto browser per le chiamate dirette da frontend.
 * Nota di sicurezza: In un ambiente di produzione reale è raccomandato instradare le chiamate tramite backend.
 */
const getApiKey = () => {
  const key = import.meta.env.OPENAI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY;
  if (!key || key.includes('inserisci_qui') || key.includes('your_openai') || key.trim() === '') {
    return null;
  }
  return key;
};

const apiKey = getApiKey();

const openai = new OpenAI({
  apiKey: apiKey || 'dummy-key',
  dangerouslyAllowBrowser: true, // Abilita l'esecuzione delle richieste direttamente dal browser
});

/**
 * Esempio di schema e struttura dati allineata a DashboardPage.jsx
 */
const SYSTEM_PROMPT = `Sei un Senior Venture Analyst ed esperto di validazione startup e business model (ValidAI Telemetry Core).
Il tuo obiettivo è analizzare con rigore critico l'idea di business fornita dall'utente e produrre un report telemetrico completo e approfondito.

DEVI rispondere ESCLUSIVAMENTE con un oggetto JSON valido (senza testo prima o dopo) che rispetta rigorosamente questo schema:

{
  "ideaDescription": "Sintesi chiara, accattivante e professionale dell'idea in una o due frasi.",
  "successScore": {
    "score": 78,
    "description": "Spiegazione sintetica dei fattori chiave che determinano il punteggio (es. mercato, unit economics, scalabilità)."
  },
  "difficultyAnalysis": [
    {
      "title": "Barriere d'ingresso",
      "description": "Analisi approfondita sulle barriere all'entrata, concorrenza, acquisizione clienti e scalabilità locale."
    },
    {
      "title": "Sfide di esecuzione",
      "description": "Analisi delle complessità operative, vincoli logistici, coordinamento fornitori e rischi di churn."
    }
  ],
  "verdict": {
    "text": "GO",
    "color": "#22C55E",
    "description": "Mercato in crescita e bisogno reale: l'idea merita di essere sviluppata."
  },
  "personas": [
    {
      "name": "Giulia Rossi",
      "role": "Studentessa universitaria, 23 anni",
      "quote": "Cosa pensa e cerca questa persona: budget limitato, acquisti last-minute da smartphone, sensibile al prezzo e alla sostenibilità.",
      "icon": "school"
    },
    {
      "name": "Marco Bianchi",
      "role": "Titolare di trattoria, 48 anni",
      "quote": "Esigenza operativa: vuole monetizzare i surplus di cucina evitando sprechi con uno strumento rapido e intuitivo.",
      "icon": "restaurant"
    },
    {
      "name": "Elena Conti",
      "role": "Impiegata aziendale, 35 anni",
      "quote": "Abitudine di consumo: lavora in centro, apprezza pasti convenienti e sani per la cena sostenendo le attività di quartiere.",
      "icon": "work"
    }
  ],
  "competitors": [
    {
      "name": "Nome Competitor 1 (es. Leader di mercato esistente o analogo)",
      "coreBusiness": "Offerta e modello di business principale del competitor.",
      "weakPoint": "Vulnerabilità o limite del competitor che l'idea dell'utente può aggredire."
    },
    {
      "name": "Nome Competitor 2 (es. Alternativa diretta o indiretta)",
      "coreBusiness": "Offerta e modello di business del secondo competitor.",
      "weakPoint": "Punto debole o limitazione geografica/tecnologica del competitor."
    },
    {
      "name": "Nome Competitor 3 (es. Soluzione tradizionale o free)",
      "coreBusiness": "Come gli utenti risolvono attualmente il problema in modo alternativo.",
      "weakPoint": "Mancanza di incentivo economico, scalabilità o friction di utilizzo."
    }
  ]
}

Regole vincolanti:
1. "score" deve essere un numero intero compreso tra 0 e 100.
2. "verdict.text" deve essere rigorosamente "GO" oppure "NO GO".
3. "verdict.color" deve essere "#22C55E" per GO o "#EF4444" per NO GO.
4. Fornisci SEMPRE esattamente 2 difficultyAnalysis, esattamente 3 personas e esattamente 3 competitors.
5. Tutto il contenuto testuale deve essere redatto in lingua italiana fluida, analitica e professionale.`;

/**
 * Analizza un'idea di business tramite OpenAI GPT-4o-mini
 * con output forzato in formato JSON (response_format: { type: "json_object" }).
 *
 * @param {string} ideaText - Il testo descrittivo dell'idea inserito dall'utente.
 * @returns {Promise<Object>} Oggetto JSON strutturato pronto per DashboardPage.
 */
export const analyzeIdea = async (ideaText) => {
  const activeKey = getApiKey();
  if (!activeKey) {
    throw new Error(
      "Chiave OPENAI_API_KEY non configurata o non valida nel file .env. Inserisci la tua chiave per effettuare l'analisi con l'API."
    );
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT,
        },
        {
          role: 'user',
          content: `Ecco l'idea di business da analizzare e convalidare:\n\n"${ideaText.trim()}"`,
        },
      ],
      // Rinforzo esplicito del formato JSON strutturato
      response_format: { type: 'json_object' },
      temperature: 0.7,
    });

    const rawContent = response.choices?.[0]?.message?.content;
    if (!rawContent) {
      throw new Error("Risposta vuota ricevuta dall'API OpenAI.");
    }

    const parsedData = JSON.parse(rawContent);
    return parsedData;
  } catch (error) {
    console.error("Errore durante la chiamata a OpenAI analyzeIdea:", error);
    throw error;
  }
};
