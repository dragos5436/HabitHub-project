import HabitTrack from '.';

describe('HabitTrack', () => {
    let component;
    
    beforeEach( () => {
        component = shallow(<HabitTrack />);
    });

    test('it renders', () => {
        expect(component).toExist;
    });
});