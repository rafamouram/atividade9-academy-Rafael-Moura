describe("Primeiro teste", () => {
    afterEach(async() => {
        driver.reset();
    });

    it("Verificar o botão ok na opção: OK CANCEL DIALOG WITH MESSAGE;", async() => {
        // Segue o fluxo até o 'OK CANCEL DIALOG WITH A MESSAGE'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("OK CANCEL DIALOG WITH A MESSAGE").className("android.widget.Button")').click();
        // Testa se abriu a modal responsável pelo alerta abriu	
        var visibilidadeModal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeModal).toBe(true);
        // Testa o texto do botão OK
        const botaoOk = await $('android=new UiSelector().resourceId("android:id/button1").className("android.widget.Button")').getText();
        expect(botaoOk).toBe("OK");
        // Testa se clicando no botão OK fecha a modal
        await $('android=new UiSelector().resourceId("android:id/button1").className("android.widget.Button")').click();
        visibilidadeModal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeModal).toBe(false);
    });

    it("Verificar o botão cancel na opção: OK CANCEL DIALOG WITH MESSAGE;", async() => {
        // Segue o fluxo até o 'OK CANCEL DIALOG WITH A MESSAGE'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("OK CANCEL DIALOG WITH A MESSAGE").className("android.widget.Button")').click();
        // Testa se abriu a modal responsável pelo alerta abriu	
        var visibilidadeModal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeModal).toBe(true);
        // Testa o texto do botão CANCEL
        const botaoCancel = await $('android=new UiSelector().resourceId("android:id/button2").className("android.widget.Button")').getText();
        expect(botaoCancel).toBe("CANCEL");
        // Testa se clicando no botão CANCEL fecha a modal
        await $('android=new UiSelector().resourceId("android:id/button2").className("android.widget.Button")').click();
        visibilidadeModal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeModal).toBe(false);
    });

    it("Deve ser possível escolher o 'Command one' em 'List Dialog'", async() => {
        // Segue o fluxo até o 'List Dialog'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("LIST DIALOG").className("android.widget.Button")').click();
        // Testa se abriu a modal responsável pelo alerta abriu
        var modal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').getText();
        expect(modal).toBe("Header title");
        // Testa se o texto do botão 'Command one' está disponível
        var comando = await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').getText();
        expect(comando).toBe("Command one");
        // Testa se clicando no botão 'Command one' aparece o texto responsável
        var comando = await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').click();
        const message = await $('android=new UiSelector().resourceId("android:id/message").className("android.widget.TextView")').getText();
        expect(message).toBe("You selected: 0 , Command one");
    });

    it("Deve ser possível escolher o 'Command two' em 'List Dialog'", async() => {
        // Segue o fluxo até o 'List Dialog'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("LIST DIALOG").className("android.widget.Button")').click();
        // Testa se abriu a modal responsável pelo alerta abriu
        var modal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').getText();
        expect(modal).toBe("Header title");
        // Testa se o texto do botão 'Command two' está disponível
        var comando = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').getText();
        expect(comando).toBe("Command two");
        // Testa se clicando no botão 'Command two' aparece o texto responsável
        var comando = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').click();
        const message = await $('android=new UiSelector().resourceId("android:id/message").className("android.widget.TextView")').getText();
        expect(message).toBe("You selected: 1 , Command two");
    });

    it("Deve ser possível escolher o 'Command three' em 'List Dialog'", async() => {
        // Segue o fluxo até o 'List Dialog'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("LIST DIALOG").className("android.widget.Button")').click();
        // Testa se abriu a modal responsável pelo alerta abriu
        var modal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').getText();
        expect(modal).toBe("Header title");
        // Testa se o texto do botão 'Command three' está disponível
        var comando = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').getText();
        expect(comando).toBe("Command three");
        // Testa se clicando no botão 'Command three' aparece o texto responsável
        var comando = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').click();
        const message = await $('android=new UiSelector().resourceId("android:id/message").className("android.widget.TextView")').getText();
        expect(message).toBe("You selected: 2 , Command three");
    });

    it("Deve ser possível escolher o 'Command four' em 'List Dialog'", async() => {
        // Segue o fluxo até o 'List Dialog'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("LIST DIALOG").className("android.widget.Button")').click();
        // Testa se abriu a modal responsável pelo alerta abriu
        var modal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').getText();
        expect(modal).toBe("Header title");
        // Testa se o texto do botão 'Command four' está disponível
        var comando = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').getText();
        expect(comando).toBe("Command four");
        // Testa se clicando no botão 'Command four' aparece o texto responsável
        var comando = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').click();
        const message = await $('android=new UiSelector().resourceId("android:id/message").className("android.widget.TextView")').getText();
        expect(message).toBe("You selected: 3 , Command four");
    });

    it("Testando o comando 'HIDE AND SHOW' em App/Fragment/Hide and Show", async() => {
        // Segue o fluxo até o 'Hide and Show'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        // Testa se o texto do botão 'Hide and Show' está disponível
        var visibilidadeTexto = await $('android=new UiSelector().text("Demonstration of hiding and showing fragments.").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeTexto).toBe(true);
        // Testa se inicialmente o texto está visível
        var botao1 = await $("id=frag1hide").getText();
        expect(botao1).toBe("HIDE");
        var botao2 = await $("id=frag2hide").getText();
        expect(botao2).toBe("HIDE");
        // Clica para esconder os textos
        await $("id=frag1hide").click();
        await $("id=frag2hide").click();
        // Testa se o texto foi escondido
        var botao1 = await $("id=frag1hide").getText();
        expect(botao1).toBe("SHOW");
        var botao2 = await $("id=frag2hide").getText();
        expect(botao2).toBe("SHOW");
    });

    it("Testando o comando 'DISPLAY_HOME_AS_UP' em 'Action Bar/Display options'", async() => {
        // Segue o fluxo até o 'DIsplay options'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("DISPLAY_HOME_AS_UP").className("android.widget.Button")').click();
        // Testa se a Seta de 'Home' está disponível
        var display = await $('android=new UiSelector().className("android.widget.ImageButton")').isDisplayed();
        expect(display).toBe(true);
    });

    // Fiz a mais do que a atividade pediu, mas vou deixar porque ficou bom
    it("Testando o comando 'DISPLAY_SHOW_HOME' em 'Action Bar/Display options'", async() => {
        // Segue o fluxo até o 'DIsplay options'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("DISPLAY_SHOW_HOME").className("android.widget.Button")').click();
        // Testa se a Pasta de 'Home' está disponível
        var display = await $('android=new UiSelector().className("android.widget.ImageButton")').isDisplayed();
        expect(display).toBe(true);
    });

    // Fiz a mais do que a atividade pediu, mas vou deixar porque ficou bom
    it("Testando o comando 'DISPLAY_USE_LOGO' em 'Action Bar/Display options'", async() => {
        // Segue o fluxo até o 'DIsplay options'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        // Testa se a Logo está visível, não deveria estar
        var display = await $('android=new UiSelector().className("android.widget.ImageView")').isDisplayed();
        expect(display).toBe(false);
        // Testa se a Logo está visível, não deveria estar já que o comando 'DISPLAY_USE_LOGO' não interfere nela
        await $('android=new UiSelector().text("DISPLAY_USE_LOGO").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().className("android.widget.ImageView")').isDisplayed();
        expect(display).toBe(false);
        // Testa se a Logo está visível, deveria estar já que a opção 'DISPLAY_SHOW_HOME' foi ativada	
        await $('android=new UiSelector().text("DISPLAY_SHOW_HOME").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().className("android.widget.ImageView")').isDisplayed();
        expect(display).toBe(true);
        // Testa a posição da Logo para ver se ela está no lugar correto
        var displayBounds = await $('android=new UiSelector().className("android.widget.ImageView")').getLocation();
        expect(displayBounds).toStrictEqual({ "x": 42, "y": 93 });
        // Testa a posição da Logo para ver se ela mudou para a outra após o clique no comando 'DISPLAY_USE_LOGO'
        await $('android=new UiSelector().text("DISPLAY_USE_LOGO").className("android.widget.Button")').click();
        var displayBounds = await $('android=new UiSelector().className("android.widget.ImageView")').getLocation();
        expect(displayBounds).toStrictEqual({ "x": 42, "y": 63 });
    });

    it("Testando o comando 'DISPLAY_SHOW_TITLE' em 'Action Bar/Display options'", async() => {
        // Segue o fluxo até o 'DIsplay options'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        // Testa se o título está visível
        var display = await $('android=new UiSelector().className("android.widget.TextView")').isDisplayed();
        expect(display).toBe(true);
        // Testa se o título está visível, não deveria estar após o clique no comando 'DISPLAY_SHOW_TITLE'
        await $('android=new UiSelector().text("DISPLAY_SHOW_TITLE").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().className("android.widget.TextView")').isDisplayed();
        expect(display).toBe(false);
    });

    it("Testando o comando 'DISPLAY_SHOW_CUSTOM' em 'Action Bar/Display options'", async() => {
        // Segue o fluxo até o 'DIsplay options'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        // Testa se o custom está visível, não deveria estar
        var display = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed();
        expect(display).toBe(false);
        // Testa se o custom está visível, deveria estar após o clique no comando 'DISPLAY_SHOW_CUSTOM'
        await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed();
        expect(display).toBe(true);
    });

    it("Testando o comando 'Navigation' em 'Action Bar/Display options'", async() => {
        // Segue o fluxo até o 'DIsplay options'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        // Testa se a Tab está visível, não deveria estar
        var display = await $('android=new UiSelector().className("android.app.ActionBar$Tab")').isDisplayed();
        expect(display).toBe(false);
        // Testa se a Tab está visível, deveria estar após o clique no comando 'Navigation'
        await $('android=new UiSelector().text("NAVIGATION").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().className("android.app.ActionBar$Tab")').isDisplayed();
        expect(display).toBe(true);
    });

    // Fiz a mais do que a atividade pediu, mas vou deixar porque ficou bom
    it("Testando o comando 'Cycle Custom View Gravity' em 'Action Bar/Display options'", async() => {
        // Segue o fluxo até o 'DIsplay options'
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        // Testa se a custom está visível, não deveria estar
        var display = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed();
        expect(display).toBe(false);
        // Testa se a custom está visível, deveria estar após o clique no comando 'DISPLAY_SHOW_CUSTOM'
        await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed();
        expect(display).toBe(true);
        // Testa se a custom está na posição correta
        displayBounds = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').getLocation();
        expect(displayBounds).toStrictEqual({ "x": 647, "y": 73 });
        // Testa se a custom está na posição correta, não muda após o primeiro clique no comando 'Cycle Custom View Gravity'
        await $('android=new UiSelector().text("CYCLE CUSTOM VIEW GRAVITY").className("android.widget.Button")').click();
        displayBounds = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').getLocation();
        expect(displayBounds).toStrictEqual({ "x": 647, "y": 73 });
        // Testa se a custom está na posição correta, muda após o segundo clique no comando 'Cycle Custom View Gravity'
        await $('android=new UiSelector().text("CYCLE CUSTOM VIEW GRAVITY").className("android.widget.Button")').click();
        displayBounds = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').getLocation();
        expect(displayBounds).toStrictEqual({ "x": 657, "y": 73 });
        // Testa se a custom está na posição correta, volta após o terceiro clique no comando 'Cycle Custom View Gravity'
        await $('android=new UiSelector().text("CYCLE CUSTOM VIEW GRAVITY").className("android.widget.Button")').click();
        displayBounds = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').getLocation();
        expect(displayBounds).toStrictEqual({ "x": 647, "y": 73 });
    });

});