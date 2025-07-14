// Blog posts data structure
// Each post should have:
// - id: unique identifier
// - title: title of the blog post
// - excerpt: short description/preview
// - date: publish date
// - author: author name
// - image: path to image or gradient config
// - content: full blog post content (could be markdown or HTML)
// - tags: array of tags for categorization

// Import blog post images
import n8nImage from "../assets/blog-posts/n8n.png";

export const blogPosts = [
  {
    id: 1,
    title: "Automatizza la Raccolta Dati da un Form Web: Guida Pratica con N8N",
    subtitle: "Semplificare la Gestione dei Dati dai Tuoi Clienti",
    excerpt:
      "Nel mondo digitale di oggi, raccogliere dati dai potenziali clienti tramite form sul proprio sito web è una pratica comune. Ma cosa succede dopo che un utente compila il modulo?",
    date: "2025-07-14",
    author: "Tech Guide",
    readTime: "8 min",
    category: "Automazione",
    image: {
      type: "gradient",
      colors: ["#3B82F6", "#60A5FA"],
      hoverImage: n8nImage,
    },
    steps: [
      {
        title: "Webhook Setup",
        description: "Configura il punto di ingresso",
        icon: "FiCode",
      },
      {
        title: "Google Sheets",
        description: "Salva i dati automaticamente",
        icon: "FiDatabase",
      },
      {
        title: "Gmail Notification",
        description: "Ricevi notifiche istantanee",
        icon: "FiMail",
      },
    ],
    content: {
      introduction:
        "Nel mondo digitale di oggi, raccogliere dati dai potenziali clienti tramite form sul proprio sito web è una pratica comune. Ma cosa succede dopo che un utente compila il modulo? Gestire manualmente ogni nuova iscrizione, aggiornare fogli di calcolo e inviare notifiche può diventare rapidamente un processo tedioso e propenso a errori.",
      callout:
        "💡 Immagina un sistema che, una volta inviati i dati da un potenziale cliente, crei automaticamente una nuova riga in un foglio di calcolo con tutte le informazioni specificate e invii contemporaneamente un'email di notifica con gli stessi dati alla tua casella di riferimento.",
      sections: [
        {
          title: "Costruire il Tuo Workflow con N8N: I Fondamentali",
          content:
            'Per realizzare il nostro obiettivo, utilizzeremo N8N per orchestrare le diverse azioni. N8N ci permette di creare un "workflow" che si attiva in base a un evento (l\'invio del form) e poi esegue una serie di azioni predefinite.',
        },
        {
          title: "1. Configurare il Webhook: Il Punto di Ingresso dei Dati",
          content:
            'La prima cosa da fare in N8N è creare un punto di ingresso per i dati che arriveranno dal tuo sito web. Questo "segnale di input" sarà un Webhook.',
        },
        {
          title: "2. Salvare i Dati su Google Sheets",
          content:
            "Una volta che il Webhook riceve i dati, il passo successivo è archiviarli in un luogo accessibile e organizzato. Google Sheets è una scelta eccellente per questo.",
        },
        {
          title: "3. Inviare Notifiche via Email con Gmail",
          content:
            "Salvare i dati è un ottimo inizio, ma essere avvisati in tempo reale dell'arrivo di un nuovo lead è ancora meglio. Per questo, integreremo una notifica email.",
        },
      ],
      codeExample: `// Esempio semplificato con fetch API
const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    // ...altri campi
};

fetch('YOUR_N8N_WEBHOOK_URL/saveData', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})`,
      conclusion:
        "Automatizzare la raccolta dati da un form web con N8N ti permette di risparmiare tempo prezioso, ridurre gli errori manuali e migliorare la reattività nella gestione dei tuoi potenziali clienti. Questo flusso di lavoro non solo garantisce che nessun lead vada perso, ma ti fornisce anche i dati necessari nel momento giusto e nel formato desiderato.",
    },
    tags: ["N8N", "Webhook", "Google Sheets", "Gmail", "Automation"],
  },
  // Add more blog posts here
];

// Helper function to format date
export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Function to get featured or latest posts
export const getFeaturedPosts = (limit = 3) => {
  return blogPosts.slice(0, limit);
};

// Function to get all posts
export const getAllPosts = () => {
  return blogPosts;
};

// Function to get post by ID
export const getPostById = (id) => {
  return blogPosts.find((post) => post.id === id);
};
