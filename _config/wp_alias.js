const path = require('path');

module.exports = {
    // 'react': 'preact-compat',
    // 'react-dom': 'preact-compat',
    // // Not necessary unless you consume a module using `createClass`
    // 'create-react-class': 'preact-compat/lib/create-react-class',

    LESS_conf: path.resolve(__dirname, '../src/styles'),

    Main  : path.resolve(__dirname, '../src/components/Main'),
    Nav   : path.resolve(__dirname, '../src/components/Nav'),

    // UI
    Accordion: path.resolve(__dirname, '../src/components/Accordion'),
    Avatar   : path.resolve(__dirname, '../src/components/Avatar'),
    Gallery  : path.resolve(__dirname, '../src/components/Gallery'),
    Icon     : path.resolve(__dirname, '../src/components/Icon'),
    IconBtn  : path.resolve(__dirname, '../src/components/IconBtn'),
    Img      : path.resolve(__dirname, '../src/components/Img'),
    Link     : path.resolve(__dirname, '../src/components/Link'),
    List     : path.resolve(__dirname, '../src/components/List'),
    ListItem : path.resolve(__dirname, '../src/components/List/list_item'),
    Loading  : path.resolve(__dirname, '../src/components/Loading'),
    Message  : path.resolve(__dirname, '../src/components/Message'),
    Modal    : path.resolve(__dirname, '../src/components/Modal'),
    Panel    : path.resolve(__dirname, '../src/components/Panel'),
    Progress : path.resolve(__dirname, '../src/components/Progress'),
    Quote    : path.resolve(__dirname, '../src/components/Quote'),
    Rating   : path.resolve(__dirname, '../src/components/Rating'),
    Table    : path.resolve(__dirname, '../src/components/Table'),
    Tabs     : path.resolve(__dirname, '../src/components/Tabs'),
    
    // Form
    Button   : path.resolve(__dirname, '../src/components/form/Button'),
    Checkbox : path.resolve(__dirname, '../src/components/form/Checkbox'),
    Fieldset : path.resolve(__dirname, '../src/components/form/Fieldset'),
    Input    : path.resolve(__dirname, '../src/components/form/Input'),
    Radio    : path.resolve(__dirname, '../src/components/form/Radio'),
    Range    : path.resolve(__dirname, '../src/components/form/Range'),
    Select   : path.resolve(__dirname, '../src/components/form/Select'),
    Switch   : path.resolve(__dirname, '../src/components/form/Switch'),
    Textarea : path.resolve(__dirname, '../src/components/form/Textarea'),
    
    // Helpers
    Lorem    : path.resolve(__dirname, '../src/components/helpers/Lorem')
};