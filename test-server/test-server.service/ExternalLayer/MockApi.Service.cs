using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using test_server.common.dto;
using TestServer.Contracts.ExternalContracts;

namespace test_server.service.ExternalLayer
{
    public class ExternalService : IMockApiService
    {
        public async Task<string> GetGenericAction()
        {
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("https://61803e8c8bfae60017adfa43.mockapi.io/GenericAction"))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    //var mockApiResponse = JsonConvert.DeserializeObject<List<GenericDto>>(apiResponse);
                    return apiResponse;
                }
            }
        }

        public async Task<string> PostGenericData(GenericDto genericDto)
        {
            using (var httpClient = new HttpClient())
            {
                genericDto.CreatedTime = DateTime.UtcNow;
                var payload = JsonConvert.SerializeObject(genericDto);
                HttpContent httpContent = new StringContent(payload, Encoding.UTF8, "application/json");
                using (var response = await httpClient.PostAsync("https://61803e8c8bfae60017adfa43.mockapi.io/GenericAction", httpContent))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    return apiResponse;
                    //var mockApiResponse = JsonConvert.DeserializeObject<List<GenericDto>>(apiResponse);
                    //return mockApiResponse;
                }              
            }
        }
    }
}
