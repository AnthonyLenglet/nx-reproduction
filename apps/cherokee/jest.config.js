module.exports = {
  name: "cherokee",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/cherokee/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
