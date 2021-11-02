using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using test_server.common.dto;

namespace TestServer.Contracts.ExternalContracts
{
    public interface IMockApiService
    {
        Task<string> GetGenericAction();
        Task<string> PostGenericData(GenericDto genericDto);
    }
}
