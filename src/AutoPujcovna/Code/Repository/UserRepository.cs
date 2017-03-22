using AutoPujcovna.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoPujcovna.Code.Repository
{
    public class UserRepository
    {
            private List<User>_user;
            private int _iDcount;


            public UserRepository()
            {
               _user = new List<User>();
            _iDcount = 1;
               _user.Add(new User { ID = _iDcount, FirstName = "Michal", LastName = "Barnet" });
            }

            public List<User> GetAll()
            {
                return _user;
            }

            public void Save(User User)
            {
            if (User != null)
            {
                User.ID = ++_iDcount; // generate by DB
                _user.Add(User);
            }

            }

            public User Get(int id)
            {
                return _user.Find(x => x.ID == id);
            }

        }
    }

