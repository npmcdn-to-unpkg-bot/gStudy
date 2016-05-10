(function(){
    'use strict'

    angular
        .module('gStudyApp')
        .factory('deckService', deckService);

    deckService.$inject = ['$http', '$log'];

    function deckService($http, $log) {
        return {
            getDecks: getDecks,
            getDeck: getDeck,
            createDeck: createDeck,
            createQuestion: createQuestion,
            getQuestions: getQuestions
        };

        function getDecks() {
            return $http.get('/api/decks')
                .then(decksComplete)
                .catch(decksComplete);

            function decksComplete(response) {
                console.log(response.data);
                return response.data;
            }

            function decksFailed(error) {
                $log.error('XHR Failed for decks.' + error.data);
            }
        }

        function getDeck(id){
            return $http.get('/api/decks/'+id+'/deck')
                .then(decksComplete)
                .catch(decksComplete);

            function decksComplete(response) {
                console.log(response.data);
                return response.data;
            }

            function decksFailed(error) {
                $log.error('XHR Failed for decks.' + error.data);
            }
        }

        function createDeck(deck) {
            return $http.post('/api/decks/create', deck)
                .then(createDeckComplete)
                .catch(createDeckFailed);

            function createDeckComplete(response) {
                console.log(response.data);
                return response.data;
            }

            function createDeckFailed(error) {
                $log.error('XHR Failed for decks.' + error.data);
            }
        }

        function createQuestion(question){
            return $http.post('/api/questions/create', question)
                .then(createQuestionComplete)
                .catch(createQuestionFailed);

            function createQuestionComplete(response) {
                console.log(response.data);
                return response.data;
            }

            function createQuestionFailed(error) {
                $log.error('XHR Failed for questions.' + error.data);
            }
        }

        function getQuestions(deck_id){
            return $http.get('/api/questions/'+deck_id)
                .then(questionsComplete)
                .catch(questionsFailed);

            function questionsComplete(response) {
                console.log(response.data);
                return response.data;
            }

            function questionsFailed(error) {
                $log.error('XHR Failed for questions.' + error.data);
            }
        }
    }
})();