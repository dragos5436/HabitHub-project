import Login from '.';

describe('Login', () => {
    let component, instance;

    beforeEach(() => {
        component = shallow(<Login />);
    });

    test('it renders', () => {
        expect(component).toExist;
    });
    
    test('it contains a jumbotron and a form', () => {
        const jumbotron = component.find('Jumbotron');
        const form = component.find('Form');
        expect(jumbotron).toExist;
        expect(form).toExist;
    });
});