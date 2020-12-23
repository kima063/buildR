using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BuildR.Models
{
    [Table("period")]
    public class Period
    {
        [Column("period_id")]
        [Key]
        public int PeriodId { get; set; }

        [Column("c_id")]
        public int C_Id { get; set; }

        [Column("course_id")]
        public string Course_Id { get; set; }

        [Column("duration_minute")]
        public int DurationMinute { get; set; }

        [Column("day_of_week")]
        public string DayOfWeek { get; set; }

        [Column("start_time")]
        public string StartTime { get; set; }

        [Column("teachers_id")]
        public int TeachersId { get; set; }

        [Column("t_name")]
        public string T_name { get; set; }

        [Column("room_id")]
        public int RoomId { get; set; }

        [Column("section")]
        public string Section { get; set; }

        [Column("semester")]
        public int Semester { get; set; }

        [Column("department")]
        public string Department { get; set; }
    }
}
