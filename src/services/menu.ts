import request from '@/utils/request'

export function getMenuAll () {
  return request({
    method: 'GET',
    url: '/boss/menu/getAll'
  })
}

export function deleteMenu (id: number) {
  return request({
    method: 'DELETE',
    url: `/boss/menu/${id}`
  })
}

export function getMenu (id: number) {
  return request({
    method: 'GET',
    url: `/boss/menu/${id}`
  })
}

export function getEditMenuInfo (id: any) {
  return request({
    method: 'GET',
    url: '/boss/menu/getEditMenuInfo',
    params: { id }
  })
}

export function saveOrUpdateMenu (data: any) {
  return request({
    method: 'POST',
    url: '/boss/menu/saveOrUpdate',
    data
  })
}