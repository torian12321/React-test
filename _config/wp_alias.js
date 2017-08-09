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
    Modal    : path.resolve(__dirname, '../src/components/Modal'),
    Loading  : path.resolve(__dirname, '../src/components/Loading'),
    Link     : path.resolve(__dirname, '../src/components/Link'),
    List     : path.resolve(__dirname, '../src/components/List'),
    ListItem : path.resolve(__dirname, '../src/components/List/list_item'),
    Rating   : path.resolve(__dirname, '../src/components/Rating'),
    Progress : path.resolve(__dirname, '../src/components/Progress'),
    Message  : path.resolve(__dirname, '../src/components/Message'),
    Quote    : path.resolve(__dirname, '../src/components/Quote'),
    Accordion: path.resolve(__dirname, '../src/components/Accordion'),
    Avatar   : path.resolve(__dirname, '../src/components/Avatar'),
    Gallery  : path.resolve(__dirname, '../src/components/Gallery'),
    Img      : path.resolve(__dirname, '../src/components/Img'),
    Tabs     : path.resolve(__dirname, '../src/components/Tabs'),
    Icon     : path.resolve(__dirname, '../src/components/Icon'),
    IconBtn  : path.resolve(__dirname, '../src/components/IconBtn'),
    Table    : path.resolve(__dirname, '../src/components/Table'),
    Panel    : path.resolve(__dirname, '../src/components/Panel'),
    
    // Form
    Radio    : path.resolve(__dirname, '../src/components/form/Radio'),
    Checkbox : path.resolve(__dirname, '../src/components/form/Checkbox'),
    Input    : path.resolve(__dirname, '../src/components/form/Input'),
    Textarea : path.resolve(__dirname, '../src/components/form/Textarea'),
    Switch   : path.resolve(__dirname, '../src/components/form/Switch'),
    Button   : path.resolve(__dirname, '../src/components/form/Button'),
    Range    : path.resolve(__dirname, '../src/components/form/Range'),
    Select   : path.resolve(__dirname, '../src/components/form/Select'),

    // Helpers
    Lorem    : path.resolve(__dirname, '../src/components/helpers/Lorem')
};