import {UntypedFormBuilder, Validators} from '@angular/forms'
import { EMAIL_PATTERN } from '../../core/constant/constant';


export const createFormReactive = (fb: UntypedFormBuilder)=> {

    return fb.group({
        email: [, [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
        password: [, [Validators.required]],
    })


}