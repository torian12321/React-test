const path = require('path');

module.exports = {
    // 'react': 'preact-compat',
    // 'react-dom': 'preact-compat',
    // // Not necessary unless you consume a module using `createClass`
    // 'create-react-class': 'preact-compat/lib/create-react-class',

    LESS_conf: path.resolve(__dirname, '../app/styles'),

    Main  : path.resolve(__dirname, '../app/components/Main'),
    Nav   : path.resolve(__dirname, '../app/components/Nav'),

    // UI
    Modal    : path.resolve(__dirname, '../app/components/Modal'),
    Loading  : path.resolve(__dirname, '../app/components/Loading'),
    Link     : path.resolve(__dirname, '../app/components/Link'),
    List     : path.resolve(__dirname, '../app/components/List'),
    ListItem : path.resolve(__dirname, '../app/components/List/list_item'),
    Rating   : path.resolve(__dirname, '../app/components/Rating'),
    Progress : path.resolve(__dirname, '../app/components/Progress'),
    Message  : path.resolve(__dirname, '../app/components/Message'),
    Quote    : path.resolve(__dirname, '../app/components/Quote'),
    Accordion: path.resolve(__dirname, '../app/components/Accordion'),
    Avatar   : path.resolve(__dirname, '../app/components/Avatar'),
    Gallery  : path.resolve(__dirname, '../app/components/Gallery'),
    Img      : path.resolve(__dirname, '../app/components/Img'),
    Tabs     : path.resolve(__dirname, '../app/components/Tabs'),
    Icon     : path.resolve(__dirname, '../app/components/Icon'),
    IconBtn  : path.resolve(__dirname, '../app/components/IconBtn'),
    Table    : path.resolve(__dirname, '../app/components/Table'),
    Panel    : path.resolve(__dirname, '../app/components/Panel'),
    
    // Form
    Radio    : path.resolve(__dirname, '../app/components/form/Radio'),
    Checkbox : path.resolve(__dirname, '../app/components/form/Checkbox'),
    Input    : path.resolve(__dirname, '../app/components/form/Input'),
    Textarea : path.resolve(__dirname, '../app/components/form/Textarea'),
    Switch   : path.resolve(__dirname, '../app/components/form/Switch'),
    Button   : path.resolve(__dirname, '../app/components/form/Button'),
    Range    : path.resolve(__dirname, '../app/components/form/Range'),
    Select   : path.resolve(__dirname, '../app/components/form/Select'),

    // Helpers
    Lorem    : path.resolve(__dirname, '../app/components/helpers/Lorem')
};