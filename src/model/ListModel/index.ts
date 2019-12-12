import { observable, computed } from 'mobx';
import { ListLoader } from '../loaders/ListLoader';

export class ListModel {
    @observable public count$ = 0;
    @observable public pages$ = 0;
    @observable private _page$ = null;
    @observable private _profiles$ = observable([]);
    @observable private _isLoading$ = false;

    @computed
    get page$() {
        return this._page$;
    }
    set page$(page) {
        this.isLoading$ = true;
        const loader = new ListLoader();
        loader.load(page).then((data) => {
            this.isLoading$ = false;
            this.profiles$ = data.results;
            if (!this._page$) {
                this.pages$ = data.info.pages;
                this.count$ = data.info.count;
            }
            this._page$ = page;
        });
    }

    @computed
    get profiles$() {
        return this._profiles$;
    }
    set profiles$(value) {
        this._profiles$ = value;
    }

    @computed
    get isLoading$() {
        return this._isLoading$;
    }
    set isLoading$(value) {
        this._isLoading$ = value;
    }

    public getProfile(id) {
        const page = Math.floor(id / 20);
        this.page$ = page;
    }
}
