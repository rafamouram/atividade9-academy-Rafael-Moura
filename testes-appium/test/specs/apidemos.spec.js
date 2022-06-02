describe("Primeiro teste", () => {
    it("Verificar o botão ok na opção: OK CANCEL DIALOG WITH MESSAGE;", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Alert Dialogs").click();
        await $("accessibility id=OK Cancel dialog with a message").click();
        const visibilidadeModal = await $("class = 	android.widget.FrameLayout").isDisplayed();
        expect(visibilidadeModal).toBe(true);
        const texto = await $('android=new UiSelector().text("Lorem ipsum dolor sit aie consectetur adipiscing Plloaso mako nuto siwuf cakso dodtos anr koop.")');
        const visibiidadeTexto = await $(texto).isDisplayed();
        expect(visibiidadeTexto).toBe(true);
        const botaoOk = await $("id = android:id/button1").getText();
        expect(botaoOk).toBe("OK");
        await $(botaoOk).click();
        expect(visibilidadeModal).toBe(false);
    });

    it("Verificar o botão cancel na opção: OK CANCEL DIALOG WITH MESSAGE;", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Alert Dialogs").click();
        await $("accessibility id=OK Cancel dialog with a message").click();
        const visibilidadeModal = await $("class = 	android.widget.FrameLayout").isDisplayed();
        expect(visibilidadeModal).toBe(true);
        const texto = await $('android=new UiSelector().text("Lorem ipsum dolor sit aie consectetur adipiscing Plloaso mako nuto siwuf cakso dodtos anr koop.")');
        const visibiidadeTexto = await $(texto).isDisplayed();
        expect(visibiidadeTexto).toBe(true);
        const botaoCancel = await $("id = android:id/button2").getText();
        expect(botaoCancel).toBe("CANCEl");
        await $(botaoCancel).click();
        expect(visibilidadeModal).toBe(false);
    });


    xit("Deve ser possível escolher o 'Command one' em 'List Dialog'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Alert Dialogs").click();
        await $("accessibility id=List dialog").click();
        const modal = await $("id = android:id/alertTitle").getText();
        expect(modal).toBe("Header title");
        const comando = await $("resource-id = android:id/text1").index(1);
        const comandoTexto = await $(comando).getText();
        expect(comandoTexto).toBe("Command one");
        await $(comando).click();
        const message = await $("resource-id = android:id/message").getText();
        expect(message).toBe("You selected: 0 , Command one");
    });

    xit("Deve ser possível escolher o 'Command two' em 'List Dialog'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Alert Dialogs").click();
        await $("accessibility id=List dialog").click();
        const modal = await $("id = android:id/alertTitle").getText();
        expect(modal).toBe("Header title");
        const comando = await $("resource-id = android:id/text1").index(2);
        const comandoTexto = await $(comando).getText();
        expect(comandoTexto).toBe("Command two");
        await $(comando).click();
        const message = await $("resource-id = android:id/message").getText();
        expect(message).toBe("You selected: 1 , Command two");
    });

    xit("Deve ser possível escolher o 'Command three' em 'List Dialog'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Alert Dialogs").click();
        await $("accessibility id=List dialog").click();
        const modal = await $("id = android:id/alertTitle").getText();
        expect(modal).toBe("Header title");
        const comando = await $("resource-id = android:id/text1").index(3);
        const comandoTexto = await $(comando).getText();
        expect(comandoTexto).toBe("Command three");
        await $(comando).click();
        const message = await $("resource-id = android:id/message").getText();
        expect(message).toBe("You selected: 2 , Command three");
    });

    xit("Deve ser possível escolher o 'Command four' em 'List Dialog'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Alert Dialogs").click();
        await $("accessibility id=List dialog").click();
        const modal = await $("id = android:id/alertTitle").getText();
        expect(modal).toBe("Header title");
        const comando = await $("resource-id = android:id/text1").index(4);
        const comandoTexto = await $(comando).getText();
        expect(comandoTexto).toBe("Command four");
        await $(comando).click();
        const message = await $("resource-id = android:id/message").getText();
        expect(message).toBe("You selected: 3 , Command four");
    });

    xit("Testando o comando 'Hide and Show' em 'Fragment'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Fragment").click();
        await $("accessibility id=List dialog").click();
        await $("accessibility id=Hide and Show").click();
        const hide1 = await $("id = io.appium.android.apis:id/frag1hide");
        const show1 = await $("id = io.appium.android.apis:id/frag1show");
        const editTexto = await $("class = android.widget.EditText");
        expect(hide1).isDisplayed().toBe(true);

        const comandoTexto = await $(comando).getText();
        expect(comandoTexto).toBe("Command four");
        await $(comando).click();
        const message = await $("resource-id = android:id/message").getText();
        expect(message).toBe("You selected: 3 , Command four");
    });


    xit("Testando o comando 'DISPLAY_HOME_AS_UP' em 'Action Bar/Display options'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Actio Bar").click();
        await $("accessibility id=Display options").click();
        const display = await $("id = Navigate up");
        var displayView = await $(display).isDisplayed();
        expect(displayText).toBe(false);
        await $("accessibility id=DISPLAY_HOME_AS_UP").click();
        displayView = await $(display).isDisplayed();
        expect(displayText).toBe(true);
    });

    xit("Testando o comando 'DISPLAY_HOME_AS_UP' em 'Action Bar/Display options'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Actio Bar").click();
        await $("accessibility id=Display options").click();
        const display = await $("id = Navigate up");
        var displayView = await $(display).isDisplayed();
        expect(displayText).toBe(false);
        await $("accessibility id=DISPLAY_HOME_AS_UP").click();
        displayView = await $(display).isDisplayed();
        expect(displayText).toBe(true);
    });

    xit("Testando o comando 'DISPLAY_SHOW_HOME' em 'Action Bar/Display options'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Actio Bar").click();
        await $("accessibility id=Display options").click();
        const display = await $("class = android.widget.ImageView");
        var displayView = await $(display).isDisplayed();
        expect(displayText).toBe(false);
        await $("accessibility id=DISPLAY_SHOW_HOME").click();
        displayView = await $(display).isDisplayed();
        expect(displayText).toBe(true);
    });

    xit("Testando o comando 'DISPLAY_USE_LOGO' em 'Action Bar/Display options'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Actio Bar").click();
        await $("accessibility id=Display options").click();
        const display = await $("class = android.widget.ImageView");
        var displayView = await $(display).isDisplayed();
        expect(displayText).toBe(false);
        await $("accessibility id=DISPLAY_USE_LOGO").click();
        displayView = await $(display).isDisplayed();
        expect(displayText).toBe(false);
        await $("accessibility id=DISPLAY_SHOW_HOME").click();
        displayView = await $(display).isDisplayed();
        expect(displayText).toBe(true);
        displayBounds = await $(display).displayBounds();
        expect(displayBounds).toBe("[42,93][534,179]");
        await $("accessibility id=DISPLAY_USE_LOGO").click();
        displayBounds = await $(display).displayBounds();
        expect(displayBounds).toBe("[42,63][210,210]");
    });

    xit("Testando o comando 'DISPLAY_SHOW_TITLE' em 'Action Bar/Display options'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Actio Bar").click();
        await $("accessibility id=Display options").click();
        const display = await $("class = android.widget.TextView");
        var displayView = await $(display).isDisplayed();
        expect(displayText).toBe(false);
        await $("accessibility id=DISPLAY_SHOW_TITLE").click();
        displayView = await $(display).isDisplayed();
        expect(displayText).toBe(true);
    });

    xit("Testando o comando 'DISPLAY_SHOW_CUSTOM' em 'Action Bar/Display options'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Actio Bar").click();
        await $("accessibility id=Display options").click();
        const display = await $("accessibility id = Custom View!");
        var displayView = await $(display).isDisplayed();
        expect(displayText).toBe(false);
        await $("accessibility id=DISPLAY_SHOW_CUSTOM").click();
        displayView = await $(display).isDisplayed();
        expect(displayText).toBe(true);
    });

    xit("Testando o comando 'Navigation' em 'Action Bar/Display options'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Actio Bar").click();
        await $("accessibility id=Display options").click();
        const display = await $("class = android.widget.LinearLayout");
        var displayView = await $(display).isDisplayed();
        expect(displayText).toBe(false);
        await $("accessibility id = Navigation").click();
        displayView = await $(display).isDisplayed();
        expect(displayText).toBe(true);
        const actionTab = await $("class = android.widget.LinearLayout");
        var actionTab1 = await $(actionTab).index(0).getText;
        expect(actionTab1).toBe("TAB 1");
        var actionTab2 = await $(actionTab).index(1).getText;
        expect(actionTab2).toBe("TAB 2");
        var actionTab3 = await $(actionTab).index(2).getText;
        expect(actionTab3).toBe("TAB 3");
    });

    xit("Testando o comando 'Cycle Custom View Gravity' em 'Action Bar/Display options'", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Actio Bar").click();
        await $("accessibility id=Display options").click();
        const display = await $("accessibility id = Custom View!");
        var displayView = await $(display).isDisplayed();
        expect(displayText).toBe(false);
        await $("accessibility id=Cycle Custom View Gravity").click();
        displayView = await $(display).isDisplayed();
        expect(displayText).toBe(false);
        await $("accessibility id=DISPLAY_SHOW_CUSTOM").click();
        displayView = await $(display).isDisplayed();
        expect(displayText).toBe(true);
        displayBounds = await $(display).displayBounds();
        expect(displayBounds).toBe("[647,73][965,199]");
        await $("accessibility id=Cycle Custom View Gravity").click();
        displayBounds = await $(display).displayBounds();
        expect(displayBounds).toBe("[647,73][965,199]");
        await $("accessibility id=Cycle Custom View Gravity").click();
        displayBounds = await $(display).displayBounds();
        expect(displayBounds).toBe("[657,73][975,199]");
        await $("accessibility id=Cycle Custom View Gravity").click();
        displayBounds = await $(display).displayBounds();
        expect(displayBounds).toBe("[647,73][965,199]");
    });

});