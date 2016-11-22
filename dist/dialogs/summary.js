"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _botbuilder=require("botbuilder"),_botbuilder2=_interopRequireDefault(_botbuilder),_equals=require("lodash/fp/equals"),_equals2=_interopRequireDefault(_equals),_humanizePlus=require("humanize-plus"),_pick=require("lodash/fp/pick"),_pick2=_interopRequireDefault(_pick),_pluck=require("lodash/fp/pluck"),_pluck2=_interopRequireDefault(_pluck),fields=[{name:"type",display:"App or bot?"},{name:"newOrExisting",display:"New or existing?"},{name:"platforms",display:"Platforms"},{name:"users",display:"# of users"},{name:"description",display:"Description"},{name:"stack",display:"Tech stack"},{name:"history",display:"History"},{name:"devs",display:"# of devs"},{name:"team",display:"Work with team?"},{name:"location",display:"Location"},{name:"startDate",display:"Start date"},{name:"contact",display:"Contact"}],filterFields=(0,_pick2.default)((0,_pluck2.default)("name",fields)),giveSummary=function(e){e.send("Okay, let me see if I have this straight.");var t=filterFields(e.privateConversationData);e.send("greenfield"===t.newOrExisting?"You want to build a new "+t.type+".":"You need help with an existing "+t.type),e.send(t.platforms.find((0,_equals2.default)("Not sure"))?"You're not sure what platforms you're interested in.":"You're interested in "+(0,_humanizePlus.oxford)(t.platforms)+" platforms."),e.send("Not sure"===t.users?"You're not sure how many users you expect":"You anticipate "+t.users+" users."),e.send("You described your "+t.type+' as "'+t.description+'"'),t.stack&&e.send("Your "+t.type+" runs on "+t.stack+"."),t.history&&e.send("Your "+t.type+" has been in development for "+t.history+"."),e.send('You say you need "'+t.devs+'" developers.'),e.send("not sure"===t.team?"You're not sure whether you want us to work with a team or alone.":"Make Apps will be working "+t.team+"."),e.send("You are located in "+t.location),e.send("not sure"===t.startDate?"You're not sure when you want to get started.":"You want to get started "+t.startDate),e.send("You told us to contact you by "+t.contact),_botbuilder2.default.Prompts.confirm(e,"Does this all look right?")},handleConfirmation=function(e,t){var o=t.response;o?e.endDialog("Great! We'll be in touch with you soon."):e.endDialog("Ah, whoops. Soon you'll be able to correct your entries, but for now we have to start over.")};exports.default=[giveSummary,handleConfirmation];
//# sourceMappingURL=summary.js.map
