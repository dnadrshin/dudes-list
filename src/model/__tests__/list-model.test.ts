import { ListModel } from '../ListModel';

test('list-model', () => {
    const listModel = new ListModel();
    expect(listModel.page$).toBe(null);
});
