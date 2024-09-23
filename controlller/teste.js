route.post("/novo" , async (req , res)=> {
    
    try
    {
        const exe = req.body;
        const retorno = await cadServico(exe);
        res.json(retorno);
    }catch{
        res.status(500);
        res.send("Ocorreu um problema no cadastro de dados");
    }


});
