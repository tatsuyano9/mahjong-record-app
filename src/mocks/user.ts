import type { User } from "@/types/domain/user";

export const mockUser: User = {
  id: "aaa",
  name: "テストユーザー",
  email: "test@test.com",
  createdAt: new Date(2020, 1, 1),
};
