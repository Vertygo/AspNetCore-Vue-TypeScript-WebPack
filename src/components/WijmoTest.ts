import * as Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
import * as wj from "wijmo/wijmo";
import * as wjGrid from "wijmo/wijmo.grid";

//Vue.config.ignoredElements = ['wj-flex-grid', 'wj-flex-grid-column']

@Component({
    name: "WijmoTest",
})
export default class WijmoTest extends Vue {
    view = new wj.ObservableArray();
    created(): void {
        this.view = TestData.getData(20);
    };
}

class TestData {

    static names: string[] = "Test 1,Test 2,Test 2,Test 3,Test 4,Test 5,Test 6,Test 7,Test 8,Test 9,Test 10,Test 11,Test 12,Test 13,Test 14,Test 15,Test 16".split(',');
    static startDate: Date = wj.DateTime.addDays(new Date(), -20);
    static testdata: wj.ObservableArray = new wj.ObservableArray();
    static getData(count: number): wj.ObservableArray {
        for (var i = 0; i < count; i++) {
            this.testdata.push(new TestData(i, this.names[i % this.names.length], i * 1000, i * 250, Math.random() * 10000, i % 4 == 0, new Date(2014, i % 12, i % 28)));
        }
        return this.testdata;
    }

    constructor(public id: number, public name?: string, public sales?: number, public expenses?: number, public downloads?: number, public active?: boolean, public date?: wj.DateTime) { };
}
