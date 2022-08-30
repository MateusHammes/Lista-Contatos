using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core
{
    public class ContatoCliente
    {
        int Id;
        string Nome;
        string Telefone;
        string Endereco;

        public ContatoCliente(string nome, string telefone, string endereco)
        {
            Nome = nome;
            Telefone = telefone;
            Endereco = endereco;
        }

    }
}