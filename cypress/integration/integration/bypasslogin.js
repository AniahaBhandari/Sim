describe('login without UI', ()=>{
    it('should able to login', ()=>{
        cy.request({
          url: "http://103.94.159.179:8085/doves-uat/v1/auth/token",
          method: 'POST',
          body:
            {
                
                    "username": "Anisha",
                    "password": "Sim@1234",
                    // "deviceType": {
                    //   "value": 0,
                    //   "type": "Access Option"
                    // },
                    // "publicKey": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC/C2+9pLGdvVjZWvTRlGCh07Z037bLkUzb35Q44ycZlSV4G74A1ceYMKYh6YOeDQPezWFObYvOlEbvuMd1h/m+eiF3aa/gfAFkOb3/OKoXyR67Pz8Y3g2t4p0O3IkSTI7aiWCTYm+o4vLfDhPS30KUkK8rDqx/3lE0bnk5q2sdQwIDAQAB",
                   "X-ACCESS-TOKEN": "e02aaf88057d4aa791acfa783d365c2e"
                }

        }).then(res => cy.log(res))
    })
})