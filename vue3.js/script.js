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
            index: 0,
            editIndex: -1,
        };
    },
    computed: {
        questions() {
            return this.flashCards[this.index].question;
        },
        answers() {
            return this.flashCards[this.index].answer;
        }
    },
    methods: {
        move(change) {
            if (this.flashCards[this.index + change]) {
                this.index += change;
                this.flipped = false;
            }
        },
        getHintUrl() {
            return `https://google.com/search?q=${encodeURIComponent(this.flashCards[0].question)}`;

        },
    },
};

const formApp = {
    data(){
        return {
            title: 'Deck Form',
            deckName: 'Spanish Vocabulary',
            deckDescription: 'A collection of common Spanish phrases and their English translations.',
        }
    }
}


Vue.createApp(FlashCardApp).mount('#app');
Vue.createApp(formApp).mount('#form-app');