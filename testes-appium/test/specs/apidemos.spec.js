describe("Primeiro teste", () => {
    it("Verificar o botão ok na opção: OK CANCEL DIALOG WITH MESSAGE;", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Alert Dialogs").click();
        await $("accessibility id=OK Cancel dialog with a message").click();
        const visibilidadeModal = await $("class = 	android.widget.FrameLayout").isDisplayed();
        expect(visibilidadeModal).toBe(false);
        const texto = await $('android=new UiSelector().text("Lorem ipsum dolor sit aie consectetur adipiscing Plloaso mako nuto siwuf cakso dodtos anr koop.")');
        const visibiidadeTexto = await $(texto).isDisplayed();
        expect(visibiidadeTexto).toBe(true);
        const botaoCancel = await $("id = android:id/button1").getText();
        expect(botaoCancel).toBe("OK");
        expect(visibilidadeModal).toBe(false);
    });

    it("Verificar o botão cancel na opção: OK CANCEL DIALOG WITH MESSAGE;", async() => {
        await $("accessibility id=App").click();
        await $("accessibility id=Alert Dialogs").click();
        await $("accessibility id=OK Cancel dialog with a message").click();
        const visibilidadeModal = await $("class = 	android.widget.FrameLayout").isDisplayed();
        expect(visibilidadeModal).toBe(false);
        const texto = await $('android=new UiSelector().text("Lorem ipsum dolor sit aie consectetur adipiscing Plloaso mako nuto siwuf cakso dodtos anr koop.")');
        const visibiidadeTexto = await $(texto).isDisplayed();
        expect(visibiidadeTexto).toBe(true);
        const botaoCancel = await $("id = android:id/button2").getText();
        expect(botaoCancel).toBe("CANCEl");
        expect(visibilidadeModal).toBe(false);
    });


    xit("Deve ser possível selecionar o gênero 'Action'", async() => {
        await $("id=filter_image_button").click();
        await $('android=new UiSelector().text("Action").className("android.widget.TextView")').click();
        await $("id=poster_image_view").click();
        const textoTitulo = await $("id=title_text_view").getText();
        expect(textoTitulo).toBe("Top Gun: Maverick");

        //verificar se um filme de ação foi exibido na tela de detalhe de filme
    });

    xit("Deve ser possível verificar se a tela exibe a quantidade de estrelas do filme", async() => {
        await $("id=filter_image_button").click();
        await $('android=new UiSelector().text("Action").className("android.widget.TextView")').click();
        await $("id=poster_image_view").click();
        const visibilidadeEstrelas = await $("id=vote_average_rating_bar").isDisplayed();
        expect(visibilidadeEstrelas).toBe(true);
        const notaFilme = await $("id=vote_average_rating_bar").getAttribute("text");
        expect(notaFilme).toBe("8.0");
        //verificar se após exibir o detalhe de um filme, a quantidade de estrelas é exibida.
    });

});