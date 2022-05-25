describe("Primeiro teste", () => {
    xit("Verificar se o botão de filtro funciona", async() => {
        await $("id=filter_image_button").click();
        const visibilidadeBotao = await $("id=clear_button").isDisplayed();
        expect(visibilidadeBotao).toBe(true);
        const textoTitulo = await $("id=clear_button").getText();
        expect(textoTitulo).toBe("CLEAR");

        // Testar se o texto do botão de limpar filtro está correto
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