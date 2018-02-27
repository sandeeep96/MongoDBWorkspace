import { Engine, Rule } from 'json-rules-engine';
// import Rule from 'json-rules-engine';

export class JsonRulesService {

    private engine;
    private event1;
    private event2;
    private conditions1;
    private conditions2;
    private rule1;
    private rule2;

    private user: any;

    constructor() {
        this.engine = new Engine();
        this.event1 = {
            type: 'first-criteria-met',
            params: {
                message: 'The selected User ID is 1 and new id is '
            }
        };
    
        this.conditions1 = {
            any: [{
                fact: 'user-information',
                operator: 'equal',
                value: 1,
                path: '.id'
            }]
        }

        this.event2 = {
            type: 'greaterThan-criteria-met',
            params: {
                message: 'Value greater than 12 by '
            }
        };

        this.conditions2 = {
            any: [{
                fact: 'user-information',
                operator: 'greaterThan',
                value: 12,
                path: '.id'
            }]
        }

        this.rule1 = new Rule({ conditions: this.conditions1, event: this.event1 });
        this.engine.addRule(this.rule1);

        this.rule2 = new Rule({ conditions: this.conditions2, event: this.event2 });
        this.engine.addRule(this.rule2);

        this.engine.on('first-criteria-met', (params) => {
            params.newId = this.user.id + 10;
        });

        this.engine.on('greaterThan-criteria-met', (params) => {
            params.gtValue = this.user.id - 12;
        });
    }

    public applyFactsAndRunRuleCheckEngine(userObject): Promise<any> {
        this.engine.addFact('user-information', userObject);
        this.user = userObject;
        return this.engine.run();
    }
        
}