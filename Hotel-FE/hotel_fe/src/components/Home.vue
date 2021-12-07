<template>

  <div class="information">
    <h1>
      ¡Bienvenido
      <span>{{ userDetailById.name }}</span
      >!
    </h1>

    <div class="details">
      <h3>Su información es la siguiente</h3>

      <h2>
        Nombre de usuario:
        <span>{{ userDetailById.username }}</span>
      </h2>

      <h2>
        Correo electrónico:
        <span>{{ userDetailById.email }}</span>
      </h2>
    </div>
  </div>
  
</template>


<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
  name: "Home",

  data: function () {
    return {
      userId: jwt_decode(localStorage.getItem("token_refresh")).user_id,
      userDetailById: {
        username: "",
        name: "",
        email: "",
      },
    };
  },

  apollo: {
    userDetailById: {
      query: gql`
        query ($userId: Int!) {
          userDetailById(userId: $userId) {
            username
            name
            email
          }
        }
      `,
      variables() {
        return {
          userId: this.userId,
        };
      }
    },
  }
};
</script>


<style>

.information {
  margin: 0;
  padding: 0%;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.information h1 {
  font-size: 60px;
  color: #283747;
}

.information h2 {
  font-size: 40px;
  color: #283747;
}

.information span {
  color: crimson;
  font-weight: bold;
}

.details h3 {
  font-size: 35px;
  color: #283747;
  text-align: center;
}

.details h2 {
  font-size: 35px;
  color: #283747;
}
.details {
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 30px 80px;
  margin: 30px 0 0 0;
}

</style>
