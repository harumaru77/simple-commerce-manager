import { ScmSharedUtil } from './../shared/scm-shared-util';
import { ScmBase } from './../shared/scm-base.model';

export declare type Categories = Category[];

export class Category extends ScmBase {
    no: number;
    name: string;
    desc: string;

    constructor(no: number) {
        super(true, ScmSharedUtil.getCurrentDateTime(), '');
        this.no = no;
    }
}
