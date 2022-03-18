
export default class AccountLinks{
    static clickSummary(){
        cy.get('#account-summary_tab').click()
    }
    static clickActivity(){
        cy.get('#account_activity_tab').click()
    }
    static clickTransferFunds(){
        cy.get('#transfer_funds_tab').click()
    }

    static clickPayBills(){
        cy.get('#pay_bills_tab').click()
    }
    static clickMoneyApp(){
        cy.get('#money_map_tab').click()
    }
    static clickOnlinesStatement(){
        cy.get('#online_statement_tab').click()
    }
}