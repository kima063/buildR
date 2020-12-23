using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BuildR.Models
{
    public class AddDBContext: DbContext 
    {
  
        public DbSet<Period> period { get; set; }
        

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql("Host=localhost;Database=RoutineBuilder; Username=buildR;Password=postgres");
    }
}
