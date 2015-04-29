function Suggestion(name, params, isDeprecated) {
  this.type = 'tag';
  this.displayText = name;
  this.snippet = name + " " + params;
  this.rightLabel = 'apiDoc';
  if (isDeprecated) {
    this.rightLabel += '(deprecated)';
  }
}

module.exports = [
  new Suggestion("@api", "{${1:method}} ${2:path} ${3:[title]}"),
  new Suggestion("@apiDefine", "${1:name} ${2:[title]}\n${3:* }           ${4:[description]}"),
  new Suggestion("@apiDescription", "${1:text}"),
  new Suggestion("@apiError", "${1:[{group\\}]} ${2:[{type\\}]} ${3:field} ${4:[description]}"),
  new Suggestion("@apiErrorExample", "${1:[{type\\}]} ${2:[title]}\n${3:* }${4:example}"),
  new Suggestion("@apiExample", "${1:[{type\\}]} ${2:title}\n${3:* }${4:example}"),
  new Suggestion("@apiGroup", "${1:name}"),
  new Suggestion("@apiHeader", "${1:[{group\\}]} ${2:[{type\\}]} ${3:[field=defaultValue]} ${4:[description]}"),
  new Suggestion("@apiHeaderExample", "${1:[{type\\}]} ${2:[title]}\n${3:* }${4:example}"),
  new Suggestion("@apiIgnore", "${1:[hint]}"),
  new Suggestion("@apiName", "${1:name}"),
  new Suggestion("@apiParam", "${1:[{group\\}]} ${2:[{type\\}]} ${3:[field=defaultValue]} ${4:[description]}"),
  new Suggestion("@apiParamExample", "${1:[{type\\}]} ${2:[title]}\n${3:* }${4:example}"),
  new Suggestion("@apiPermission", "${1:name}"),
  new Suggestion("@apiSampleRequest", "${1:url}"),
  new Suggestion("@apiSuccess", "${1:[{group\\}]} ${2:[{type\\}]} ${3:field} ${4:[description]}"),
  new Suggestion("@apiSuccessExample", "${1:[{type\\}]} ${2:[title]}\n${3:* }${4:example}"),
  new Suggestion("@apiUse", "${1:name}"),
  new Suggestion("@apiVersion", "${1:version}"),

  // Deprecated options
  new Suggestion("@apiDefineErrorStructure", "${1:name}",
                 true),
  new Suggestion("@apiDefineHeaderStructure", "${1:name}",
                 true),
  new Suggestion("@apiDefinePermission", "${1:name} ${2:[title]}\n${3:* }                     ${4:[description]}",
                 true),
  new Suggestion("@apiDefineStructure", "${1:name}",
                 true),
  new Suggestion("@apiDefineSuccessStructure", "${1:name}",
                 true),
  new Suggestion("@apiErrorStructure", "${1:name}",
                 true),
  new Suggestion("@apiErrorTitle", "{${1:group}} ${2:description}",
                 true),
  new Suggestion("@apiGroupDescription", "${1:text}",
                 true),
  new Suggestion("@apiHeaderStructure", "${1:name}",
                 true),
  new Suggestion("@apiHeaderTitle", "{${1:group}} ${2:description}",
                 true),
  new Suggestion("@apiParamTitle", "{${1:group}} ${2:description}",
                 true),
  new Suggestion("@apiStructure", "${1:name}",
                 true),
  new Suggestion("@apiSuccessStructure", "${1:name}",
                 true),
  new Suggestion("@apiSuccessTitle", "{${1:group}} ${2:description}",
                 true),
];
