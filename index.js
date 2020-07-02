'use strict';


module.exports = function HelpCommand(api, opts) {

    api.modifyCommandHelp(args => {
        const { commands } = args;

        return {
            commands,
            scriptName: 'micapp',
        };
    });

};

