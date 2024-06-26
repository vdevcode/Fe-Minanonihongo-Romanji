import type { AxiosResponse } from 'axios'
import http from '~/utils/helpers/axios'

export default class BaseRepository {
  protected resource: string

  constructor(resource = '') {
    this.resource = resource
  }

  public async get(config?: object, params?: object): Promise<AxiosResponse> {
    return await http.get(this.resource, { config, params })
  }

  public async post(object?: object, config?: object): Promise<AxiosResponse> {
    return await http.post(this.resource, object, config)
  }

  public async delete(
    id: string | number,
    config?: object,
  ): Promise<AxiosResponse> {
    return await http.delete(`${this.resource}/${id}`, config)
  }

  public async put(
    id: string | number,
    object: object,
    config?: object,
  ): Promise<AxiosResponse> {
    return await http.put(`${this.resource}/${id}`, object, config)
  }

  protected setResource(resource: string) {
    this.resource = resource
  }
}
