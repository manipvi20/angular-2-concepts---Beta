import {Control, ControlGroup} from "angular2/common";

export class PasswordValidator{

    static passwordsShouldMatch(group: ControlGroup) {
        var newPassword = group.find('newPassword').value;
        var confirmPassword = group.find('confirmPassword').value;

        if (newPassword == '' || confirmPassword == '')
            return null;
        
        if (newPassword != confirmPassword)
            return { passwordsShouldMatch: true };
            
        return null;
    }

}