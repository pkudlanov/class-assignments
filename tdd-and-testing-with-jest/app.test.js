describe('testing object', () => {
    it('someObject has property name with value of "rover"', () => {
        const obj = {
            name: 'rover',
            age: 37,
            planet: 'mars'
        };
        expect(obj.name).toEqual('rover');
    });
});