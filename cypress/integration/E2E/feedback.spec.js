import feedbackpage from '../../Page-Objects/Pages/feedbackpage'
describe('Fedback Test Using Fixtures',()=>{
   before(function(){
    feedbackpage.load()
   })
   it('Should submit feedback form',()=>{
       feedbackpage.submitFeedback()
       cy.wait(1000)
       cy.percySnapshot()


   })
})