using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace test_server.common.dto
{
    public class GenericDto
    {
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("imageUrl")]
        public string ImageUrl { get; set; }
        [JsonProperty("createdTime")]
        public DateTime CreatedTime { get; set; }
        [JsonProperty("authorName")]
        public string AuthorName { get; set; }
        [JsonProperty("totalLikes")]
        public int TotalLikes { get; set; }
        [JsonProperty("firstName")]
        [Required]
        public string FirstName { get; set; }
        [JsonProperty("count")]
        public int Count { get; set; }
        [JsonProperty("type")]
        public bool Type { get; set; }
        [JsonProperty("email")]
        [Required]
        public string Email { get; set; }
    }
}
