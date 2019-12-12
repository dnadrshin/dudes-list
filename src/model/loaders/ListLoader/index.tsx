export class ListLoader {
    public load(page) {
        const response = fetch(`https://rickandmortyapi.com/api/character/?page=${page + 1}`)
            .then((res) => res.json());
        return response;
    }
}
