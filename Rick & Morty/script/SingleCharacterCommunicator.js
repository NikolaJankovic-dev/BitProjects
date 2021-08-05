class SingleCharacterCommunicator{
    constructor(url){
        this.baseUrl = url;
    }
    fetchCharacter(id){
        const charEndPoint = `${this.baseUrl}/${id}`;
        return fetch(charEndPoint).then(function (response){
            return response.json()
        })
    }
}

export const singleCharacterCommunicator = new SingleCharacterCommunicator('https://rickandmortyapi.com/api/character');
