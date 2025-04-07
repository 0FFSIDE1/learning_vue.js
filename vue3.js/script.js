const FlashCardApp = {
    data(){
        return {
            deckName: 'Spanish Vocabulary',
            flashCards: [
                { question: '¿Cómo estás?', answer: 'How are you?' },
                { question: '¿Qué hora es?', answer: 'What time is it?' },
                { question: '¿Dónde está la biblioteca?', answer: 'Where is the library?' },
                { question: '¿Cuánto cuesta esto?', answer: 'How much does this cost?' },
                { question: 'Me gusta aprender idiomas.', answer: 'I like learning languages.' }
            ],
            flipped: false,
            userAnswer: 'flip',

            
        };
    },
    computed: {
        getHintUrl() {
            return `https://google.com/search?q=${encodeURIComponent(this.flashCards[0].question)}`;

        }
    }
};
Vue.createApp(FlashCardApp).mount('#app');