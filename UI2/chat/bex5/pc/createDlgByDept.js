define(function(require) {
	// var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var IM = require("../../base/js/im");

	var Model = function() {
		this.callParent();
		this.deptName = justep.Bind.observable();
	};

	Model.prototype.sendMessageBtnClick = function(event) {
		var sFID = this.params.sFID;
		var sName = this.params.sName;
		justep.Util.confirm("确定将此部门及其子部门下所有人创建为群组？", function() {
			IM.createDeptDlg(sFID, sName).done(function(peer) {
				justep.Shell.fireEvent("onGroupSendMessagePage", {
					id : peer.id,
					type : peer.type
				});
			});
		})
	};

	Model.prototype.modelModelConstructDone = function(event) {
		this.deptName.set(this.params.sName);
	};

	return Model;
});