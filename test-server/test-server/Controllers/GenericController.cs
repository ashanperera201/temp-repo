using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using test_server.common.dto;
using TestServer.Contracts.ExternalContracts;

namespace test_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenericController : ControllerBase
    {
        private readonly IMockApiService _mockApiService;
        public GenericController(IMockApiService mockApiService)
        {
            _mockApiService = mockApiService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUserAsync([FromBody] GenericDto authDto)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var mockResult = await _mockApiService.PostGenericData(authDto);
                    return StatusCode(StatusCodes.Status200OK, mockResult);
                }
                else
                {
                    return StatusCode(StatusCodes.Status417ExpectationFailed);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        public async Task<IActionResult> CreateUserAsync()
        {
            try
            {
                var mockResult = await _mockApiService.GetGenericAction();
                return StatusCode(StatusCodes.Status200OK, mockResult);
                    
            }
            catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

    }
}
