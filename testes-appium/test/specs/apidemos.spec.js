describe("Primeiro teste", () => {
    afterEach(async() => {
        driver.reset();
    });

    it("Verificar o botão ok na opção: OK CANCEL DIALOG WITH MESSAGE;", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("OK CANCEL DIALOG WITH A MESSAGE").className("android.widget.Button")').click();
        var visibilidadeModal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeModal).toBe(true);
        const botaoOk = await $('android=new UiSelector().resourceId("android:id/button1").className("android.widget.Button")').getText();
        expect(botaoOk).toBe("OK");
        await $('android=new UiSelector().resourceId("android:id/button1").className("android.widget.Button")').click();
        visibilidadeModal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeModal).toBe(false);
    });

    it("Verificar o botão cancel na opção: OK CANCEL DIALOG WITH MESSAGE;", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("OK CANCEL DIALOG WITH A MESSAGE").className("android.widget.Button")').click();
        var visibilidadeModal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeModal).toBe(true);
        const botaoCancel = await $('android=new UiSelector().resourceId("android:id/button2").className("android.widget.Button")').getText();
        expect(botaoCancel).toBe("CANCEL");
        await $('android=new UiSelector().resourceId("android:id/button2").className("android.widget.Button")').click();
        visibilidadeModal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeModal).toBe(false);
    });

    it("Deve ser possível escolher o 'Command one' em 'List Dialog'", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("LIST DIALOG").className("android.widget.Button")').click();
        var modal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').getText();
        expect(modal).toBe("Header title");
        var comando = await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').getText();
        expect(comando).toBe("Command one");
        var comando = await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').click();
        const message = await $('android=new UiSelector().resourceId("android:id/message").className("android.widget.TextView")').getText();
        expect(message).toBe("You selected: 0 , Command one");
    });

    it("Deve ser possível escolher o 'Command two' em 'List Dialog'", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("LIST DIALOG").className("android.widget.Button")').click();
        var modal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').getText();
        expect(modal).toBe("Header title");
        var comando = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').getText();
        expect(comando).toBe("Command two");
        var comando = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').click();
        const message = await $('android=new UiSelector().resourceId("android:id/message").className("android.widget.TextView")').getText();
        expect(message).toBe("You selected: 1 , Command two");
    });

    it("Deve ser possível escolher o 'Command three' em 'List Dialog'", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("LIST DIALOG").className("android.widget.Button")').click();
        var modal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').getText();
        expect(modal).toBe("Header title");
        var comando = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').getText();
        expect(comando).toBe("Command three");
        var comando = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').click();
        const message = await $('android=new UiSelector().resourceId("android:id/message").className("android.widget.TextView")').getText();
        expect(message).toBe("You selected: 2 , Command three");
    });

    it("Deve ser possível escolher o 'Command four' em 'List Dialog'", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("LIST DIALOG").className("android.widget.Button")').click();
        var modal = await $('android=new UiSelector().resourceId("android:id/alertTitle").className("android.widget.TextView")').getText();
        expect(modal).toBe("Header title");
        var comando = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').getText();
        expect(comando).toBe("Command four");
        var comando = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').click();
        const message = await $('android=new UiSelector().resourceId("android:id/message").className("android.widget.TextView")').getText();
        expect(message).toBe("You selected: 3 , Command four");
    });

    it("Testando o comando 'DISPLAY_HOME_AS_UP' em 'Action Bar/Display options'", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("DISPLAY_HOME_AS_UP").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().className("android.widget.ImageButton")').isDisplayed();
        expect(display).toBe(true);
    });

    it("Testando o comando 'DISPLAY_SHOW_HOME' em 'Action Bar/Display options'", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("DISPLAY_SHOW_HOME").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().className("android.widget.ImageButton")').isDisplayed();
        expect(display).toBe(true);
    });

    it("Testando o comando 'DISPLAY_USE_LOGO' em 'Action Bar/Display options'", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        var display = await $('android=new UiSelector().className("android.widget.ImageView")').isDisplayed();
        expect(display).toBe(false);
        await $('android=new UiSelector().text("DISPLAY_USE_LOGO").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().className("android.widget.ImageView")').isDisplayed();
        expect(display).toBe(false);
        await $('android=new UiSelector().text("DISPLAY_SHOW_HOME").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().className("android.widget.ImageView")').isDisplayed();
        expect(display).toBe(true);
        var displayBounds = await $('android=new UiSelector().className("android.widget.ImageView")').getLocation();
        expect(displayBounds).toStrictEqual({ "x": 42, "y": 93 });
        await $('android=new UiSelector().text("DISPLAY_USE_LOGO").className("android.widget.Button")').click();
        var displayBounds = await $('android=new UiSelector().className("android.widget.ImageView")').getLocation();
        expect(displayBounds).toStrictEqual({ "x": 42, "y": 63 });
    });

    it("Testando o comando 'DISPLAY_SHOW_TITLE' em 'Action Bar/Display options'", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        var display = await $('android=new UiSelector().className("android.widget.TextView")').isDisplayed();
        expect(display).toBe(true);
        await $('android=new UiSelector().text("DISPLAY_SHOW_TITLE").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().className("android.widget.TextView")').isDisplayed();
        expect(display).toBe(false);
    });

    it("Testando o comando 'DISPLAY_SHOW_CUSTOM' em 'Action Bar/Display options'", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        var display = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed();
        expect(display).toBe(false);
        await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed();
        expect(display).toBe(true);
    });

    it("Testando o comando 'Navigation' em 'Action Bar/Display options'", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        var display = await $('android=new UiSelector().className("android.app.ActionBar$Tab")').isDisplayed();
        expect(display).toBe(false);
        await $('android=new UiSelector().text("NAVIGATION").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().className("android.app.ActionBar$Tab")').isDisplayed();
        expect(display).toBe(true);
    });

    it("Testando o comando 'Cycle Custom View Gravity' em 'Action Bar/Display options'", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        var display = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed();
        expect(display).toBe(false);
        await $('android=new UiSelector().text("DISPLAY_SHOW_CUSTOM").className("android.widget.Button")').click();
        var display = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed();
        expect(display).toBe(true);
        displayBounds = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').getLocation();
        expect(displayBounds).toStrictEqual({ "x": 647, "y": 73 });
        await $('android=new UiSelector().text("CYCLE CUSTOM VIEW GRAVITY").className("android.widget.Button")').click();
        displayBounds = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').getLocation();
        expect(displayBounds).toStrictEqual({ "x": 647, "y": 73 });
        await $('android=new UiSelector().text("CYCLE CUSTOM VIEW GRAVITY").className("android.widget.Button")').click();
        displayBounds = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').getLocation();
        expect(displayBounds).toStrictEqual({ "x": 657, "y": 73 });
        await $('android=new UiSelector().text("CYCLE CUSTOM VIEW GRAVITY").className("android.widget.Button")').click();
        displayBounds = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').getLocation();
        expect(displayBounds).toStrictEqual({ "x": 647, "y": 73 });
    });

});