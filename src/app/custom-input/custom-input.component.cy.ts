import { CustomInputComponent } from './custom-input.component'

describe('CustomInputComponent', () => {
    describe('will ONLY pass on `cypress open`', () => {
        it('generates unique id', () => {
            const generatedIds: any[] = []

            cy.mount(
                `
                    <app-custom-input></app-custom-input>
                    <app-custom-input></app-custom-input>
                `,
                {
                    declarations: [CustomInputComponent], 
                }
            )

            cy.get('app-custom-input > input')
                .each($component => generatedIds.push($component.attr('id')))
                .then(() => {
                    expect(generatedIds[0]).not.to.equal(generatedIds[1]);
                })
        })
    })

    describe('will pass on `cypress open` AND `cypress run`', () => {
        it('generates unique id', () => {
            const generatedIds: any[] = []

            cy.mount(
                `
                    <app-custom-input></app-custom-input>
                    <app-custom-input></app-custom-input>
                `,
                {
                    declarations: [CustomInputComponent], 
                }
            )

            cy.get('app-custom-input > input').as('components')

            // On executions of 'cypress run', binded attributes are undefined when Cypress commands start running,
            // so we start with a 'should' assertion here that implicitly waits until the 'id' attributes are defined.
            // This behavior is ONLY present on 'cypress run' executions
            cy.get('@components').should(($components) => {
                $components.each((index, $component) => {
                    expect($component.getAttribute('id')).not.to.be.null;
                })
            })

            cy.get('app-custom-input > input')
                .each($component => generatedIds.push($component.attr('id')))
                .then(() => {
                    expect(generatedIds[0]).not.to.equal(generatedIds[1]);
                })
        })
    })
})