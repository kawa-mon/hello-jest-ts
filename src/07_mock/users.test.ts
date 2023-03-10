import axios from 'axios'
import Users from './users'

jest.mock('axios')

it('should fetch all users', async () => {
  const users = [{ name: 'Bob' }]
  const resp = { data: users }
  ;(axios as jest.Mocked<typeof axios>).get.mockResolvedValue(resp)
  // axios.get.mockImplementation(() => Promise.resolve(resp)) // 上記のmockResolvedValueと同じ設定
  // axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve(resp)); // 上記のmockResolvedValueと同じ設定

  await expect(Users.search()).resolves.toEqual(users)
})
