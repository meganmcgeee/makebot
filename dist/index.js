"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _initialize=require("./initialize"),_botbuilder=require("botbuilder"),_botbuilder2=_interopRequireDefault(_botbuilder),_routes=require("./routes"),_routes2=_interopRequireDefault(_routes),_showData=require("./middleware/showData"),_showData2=_interopRequireDefault(_showData),_showDialogStack=require("./middleware/showDialogStack"),_showDialogStack2=_interopRequireDefault(_showDialogStack),_updateConversationData=require("./lib/updateConversationData"),_updateConversationData2=_interopRequireDefault(_updateConversationData);_initialize.bot.use(_showData2.default),_initialize.bot.use(_showDialogStack2.default),_initialize.bot.use({receive:function(e,t){console.log(e.address),t()}}),_initialize.bot.dialog("/",[function(e){return _botbuilder2.default.Prompts.choice(e,"Yo! Do you want an app or a bot?",["app","bot"])},function(e,t){var i=0===t.response.index;(0,_updateConversationData2.default)(e,{type:i?"app":"bot"}),e.beginDialog(i?_routes2.default.app.newOrExisting:_routes2.default.bot.newOrExisting)}]);
//# sourceMappingURL=index.js.map
