using System.ComponentModel.DataAnnotations;

namespace Dating.API.Dto
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage="Username is required ,please enter it to procede further")]
        public string Username { get; set; }

        [Required(ErrorMessage="Password is required ,please enter it to procede further")]
        public string Password { get; set; }
    }
}